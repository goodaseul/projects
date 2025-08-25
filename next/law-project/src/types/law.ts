// 근로기준법
export interface Law {
    현행연혁코드: string;
    법령일련번호: string;
    자법타법여부: string;
    법령상세링크: string;
    법령명한글: string;
    법령구분명: string;
    소관부처명: string;
    공포번호: string;
    제개정구분명: string;
    소관부처코드: string;
    id: string;
    법령ID: string;
    공동부령정보: string;
    시행일자: string;
    공포일자: string;
    법령약칭명: string;
}
export interface LawSearchRes {
    LawSearch: {
        law: Law[];
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
