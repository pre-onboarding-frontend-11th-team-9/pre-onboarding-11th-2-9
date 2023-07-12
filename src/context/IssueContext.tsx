import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { ISSUE } from "../types/issue.type";
import { SORT_TYPE } from "../utils/enums";

type InitialStateProps = {
  title: string;
  total: number;
  issues: ISSUE[];
  issue: ISSUE | null;
  sort: SORT_TYPE;
};

type Action = {
  type: string;
  data?: any;
  err?: any;
};

type ProviderProps = {
  children: ReactNode;
};

const initialState: InitialStateProps = {
  title: "",
  total: 0,
  issues: [],
  issue: null,
  sort: SORT_TYPE.COMMENT_DESC,
};
const IssueStateContext = createContext<InitialStateProps | null>(null);
const IssueDispatchContext = createContext<Dispatch<Action> | null>(null);

const issueReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "GET_ISSUES":
      console.log("reducer", action.data);
      if (action.data.page === 1) {
        return {
          ...state,
          issues: action.data.items,
        };
      } else {
        if (action.data.page === Math.ceil(state.total / action.data.per_page))
          return state;
        return {
          ...state,
          issues: state.issues.concat(action.data.items),
        };
      }

    case "GET_TOTAL":
      return {
        ...state,
        total: action.data,
      };
    case "GET_TITLE":
      return {
        ...state,
        title: action.data,
      };
    case "UPDATE_SORT":
      return {
        ...state,
        sort: action.data,
      };
    case "GET_ISSUE":
      return {
        ...state,
        issue: action.data,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const IssueProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(issueReducer, initialState);

  return (
    <IssueStateContext.Provider value={state}>
      <IssueDispatchContext.Provider value={dispatch}>
        {children}
      </IssueDispatchContext.Provider>
    </IssueStateContext.Provider>
  );
};

export const useIssueState = () => {
  const state = useContext(IssueStateContext);
  if (!state) {
    throw new Error("Cannot find IssueProvider");
  }
  return state;
};

export const useIssueDispatch = () => {
  const dispatch = useContext(IssueDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find IssueProvider");
  }
  return dispatch;
};
