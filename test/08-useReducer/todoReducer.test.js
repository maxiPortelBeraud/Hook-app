import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("todoReducer test", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo todo",
      done: false,
    },
  ];
  test("Debe regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("Debe agregar un todo", () => {
    const action = {
      type: "Add Todo",
      payload: {
        id: 2,
        description: "Nuevo todo #2",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("Debe eliminar un TODO", () => {
    const addAction = {
      type: "Add Todo",
      payload: {
        id: 2,
        description: "Nuevo todo #2",
        done: false,
      },
    };
    const removeAction = {
      type: "Remove Todo",
      payload: 1,
    };
    const addedState = todoReducer(initialState, addAction);
    const removedState = todoReducer(addedState, removeAction);

    expect(addedState.length).toBe(2);
    expect(removedState.length).toBe(1);
  });

  test("Debe realizar el cambio del TODO", () => {
    const toggleAction = {
      type: "Toggle Todo",
      payload: 2,
    };
    const { payload } = toggleAction;
    const addAction = {
      type: "Add Todo",
      payload: {
        id: 2,
        description: "Nuevo todo #2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, addAction);
    const toggleState = todoReducer(newState, toggleAction);

    expect(toggleState[payload - 1].done).toBeTruthy();
  });
});
