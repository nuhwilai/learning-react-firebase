import { firebaseDb } from './firebase';
import * as todoActions from '../actions/todos'

let ref = null;

let _services = {
    init: (emit) => {
        ref = firebaseDb.ref('todos');
        _services.subscribe(emit);
        console.log("service processing...")
    },
    delete: async (id) => {
        await ref.child(id).remove();
    },
    create: async (todo) => {
        let newKey = ref.push().key;
        await ref.child(newKey).set(todo);
    },
    update: async (todo) => {
        let update = {}
        update[`/${todo.id}`] = {
            content: todo.content,
            completed: todo.completed
        }
        await ref.update(update);
    },
    subscribe: (emit) => {
        let list = []
        let initialize = false;
        ref.once('value', (snap) => {
            initialize = true;
            snap.forEach(function(s) {
                list.push(
                    {id: s.key, ...s.val()}
                )
            });
            emit(todoActions.loadSuccess(list));
        })

        ref.on('child_added', snap => {
            if(initialize){
                emit(todoActions.addTodoSuccess(_services.unwrapSnapshot(snap)))
            }
        })

        ref.on('child_removed', snap => {
            console.log('child_removed')
            emit(todoActions.deleteTodoSuccess(snap.key))
        })

        ref.on('child_changed', snap => {
            emit(todoActions.updateTodoSuccess(_services.unwrapSnapshot(snap)))
        })
        
    },
    unsubscribe: () => {
        ref.off();
    },
    unwrapSnapshot: (snapshot) => {
        let attrs = snapshot.val();
        attrs.id = snapshot.key;
        return attrs;
    }
}

export const services = _services;