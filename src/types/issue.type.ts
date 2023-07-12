import { LABEL } from "./label.type";
import { REACTIONS } from "./reaction.type";
import { REPOSITORY } from "./repository.type";
import { USER } from "./user.type";

export type RESPONSE_TYPE = {
  incomplete_results: boolean;
  items: ISSUE[];
  total_count: number;
};

export type ISSUE = {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: USER;
  labels: LABEL[];
  state: string; // "open",
  locked: false;
  assignee: USER;
  assignees: USER[];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null;
  author_association: string; // "MEMBER",
  active_lock_reason: null;
  repository: REPOSITORY;
  body: string;
  reactions: REACTIONS;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
};
