export interface Law {
    id: string;
    법령ID: string;
    법령일련번호: string;
    법령명: string;
    시행일자: string;
    법령구분명: string;
    소관부처명: string;
    공포번호: string;
    본문상세링크: string;
    제개정구분명: string;
    공포일자: string;
    소관부처코드: string;
}
export interface LsStmdSearch {
    LsStmdSearch: {
        law: Law[] | null;
        resultMsg: string;
        키워드: string;
        page: string;
        resultCode: string;
        target: string;
        totalCnt: string;
        section: string;
        numOfRows: string;
    };
}
