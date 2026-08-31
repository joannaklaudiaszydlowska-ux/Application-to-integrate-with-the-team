export type SessionStatus =
    | "draft"
    | "live"
    | "ended";
export interface Slide {
    id: string;
    presentationId: string;
    position: number; 
    slideType:
    | "multiple_choice"
    | "word_cloud"
    | "open_text"
    | "q_and_a";
    question: string;
    config: Record<
        string,
        unknown
    >;
    createdAt: string;
    updatedAt: string;
}
export interface Session {
    id: string;
    presentation_id: string;
    owner_id: string;
    join_code: string;
    current_slide_id:
    | string
    | null;
    status: SessionStatus;
    started_at:
    | string
    | null;
    ended_at:
    | string
    | null;
}
