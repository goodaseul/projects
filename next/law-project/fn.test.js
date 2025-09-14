// eslint-disable-next-line @typescript-eslint/no-require-imports
const fn = require("./fn");

test("1은 1이다", () => {
    expect(1).toBe(1);
});

test("2 더하기 3은 5야.", () => {
    expect(fn.add(2, 3)).toBe(5); //Matcher
});

test("3 더하기 3은 5가 아니야.", () => {
    expect(fn.add(3, 3)).not.toBe(5);
});

test("gender라는 것이 없어도 넘어가짐 이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser("Mike", 30)).toEqual({
        name: "Mike",
        age: 30,
    });
});

test("보다 엄격하게-이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser("Mike", 30, undefined)).toStrictEqual({
        name: "Mike",
        age: 30,
        gender: undefined,
    });
});

test("null은 null입니다.", () => {
    expect(null).toBeNull();
});

test("0은 false입니다.", () => {
    expect(fn.add(1, -1)).toBeFalsy();
});

test("비어있지 않은 문자열을 true입니다.", () => {
    expect(fn.add("Hello", "World")).toBeTruthy();
});

test("ID는 10자 이하여야 합니다.", () => {
    // const id = "THE_BLACK_OREDER";
    const id = "THE_BLACK";

    expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리", () => {
    const pw = "1234";

    expect(pw.length).toBe(4);
    expect(pw.length).toEqual(4);
});

test("0.1더하기 0.2는 0.3입니다.", () => {
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Hello World에 a라는 글자가 있나?", () => {
    expect("Hello World").toMatch(/h/i);
});

test("유저 리스트에 Mike가 있나?", () => {
    const user = "Mike";
    const userList = ["Tom", "Jane", "Kai", "Mike"];

    expect(userList).toContain(user);
});

test("이거 에러 나나요?", () => {
    expect(() => fn.thorwErr()).toThrow("XX");
});
