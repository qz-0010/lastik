export interface Event {
    uuid?: string;
    ctime?: string;
    mtime?: string;
    is_active?: boolean;
    is_deleted?: boolean;
    title: string;
    summary: string;
    description: string;
    duration: string;
}
