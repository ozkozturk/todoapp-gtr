type TodoTypes = {
  id: number,
  title: string,
  completed: boolean,
  createdAt: string,
  updatedAt: string,
};

type InitialStateTypes = {
  todos: {
    status: string;
    loading: boolean;
    data: TodoTypes[];
  };
};

const initialState: InitialStateTypes = {
  todos: {
    status: '',
    loading: false,
    data: [],
  },
};

export default initialState;
