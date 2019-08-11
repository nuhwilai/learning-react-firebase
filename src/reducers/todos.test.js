import todos from './todos';
import * as actions from '../actions/todos';

describe('todos reducer', () => {
  it('case initial state', () => {
    const stateBefore = undefined;
    expect(todos(stateBefore, {})).toEqual([]);
  });

  it('ADD_TODO', () => {
    const stateBefore = [];
    expect(todos(stateBefore, actions.addTodo('hello world'))).toEqual([
      {
        id: 0,
        content: 'hello world',
        completed: false
      }
    ]);
  });

  it('TOGGLE_TODO', () => {
    const stateBefore = [
      {
        id: 0,
        content: 'hello world',
        completed: false
      }
    ];
    expect(todos(stateBefore, actions.toggleTodo(0))).toEqual([
      {
        id: 0,
        content: 'hello world',
        completed: true
      }
    ]);
  });

  it('DELETE_TODO', () => {
    expect(
      todos(
        [
          {
            id: 0,
            content: 'hello world',
            completed: false
          }
        ],
        actions.deleteTodo(0)
      )
    ).toEqual([]);

    expect(
      todos(
        [
          {
            id: 0,
            content: 'hello world',
            completed: false
          },
          {
            id: 1,
            content: 'hello react',
            completed: true
          }
        ],
        actions.deleteTodo(0)
      )
    ).toEqual([
      {
        id: 1,
        content: 'hello react',
        completed: true
      }
    ]);
  });
});
