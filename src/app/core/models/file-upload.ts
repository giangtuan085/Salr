export interface FileUpload {
    id: number;
    name: string;
    reviewerCount: number;
    status: number;
    filePath: string;
    // mapping: string;
}

export enum FileStatus {
    Uploaded,
    Ocr,
    Reviewing,
    Verified
}
