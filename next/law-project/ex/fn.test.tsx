import fn from "./fn";

// eslint-disable-next-line @typescript-eslint/no-require-imports

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

test("3초 후에 받아온 이름은 Mike", (done) => {
    function callback(name: any) {
        try {
            expect(name).toBe("Mike");
            done();
        } catch (error) {
            done();
        }
    }
    fn.getName(callback);
});

test("3초 후에 받아온 나이는 30", async () => {
    // @@promise

    // return fn.getAge().then((age) => {
    //     expect(age).toBe(30);
    // });

    // @@ resolves, rejects

    // return expect(fn.getAge()).resolves.toBe(30);s
    // return expect(fn.getAge()).rejects.toMatch("error");
    // or?
    // await expect(fn.getAge()).rejects.toMatch("error");

    const age = await fn.getAge();
    expect(age).toBe(30);
});

let num = 0;

//테스트 직전
beforeEach(() => {
    num = 0;
});
//테스트 이후
// afterEach(() => {
//  num = 0;
// })

test("0 더하기 1은 1이야", () => {
    num = fn.add(num, 1);
    expect(num).toBe(1);
});

test("0 더하기 2은 2이야", () => {
    num = fn.add(num, 2);
    expect(num).toBe(2);
});

test("0 더하기 3은 3이야", () => {
    num = fn.add(num, 3);
    expect(num).toBe(3);
});

test("0 더하기 4은 4이야", () => {
    num = fn.add(num, 4);
    expect(num).toBe(4);
});

let user: { name: any; age: any; gender: any };
beforeAll(async () => {
    user = (await fn.connectCarDb()) as { name: any; age: any; gender: any };
});
afterAll(() => {
    return fn.disconnectDb();
});

test("이름은 Mike", () => {
    expect(user.name).toBe("Mike");
});

test("나이는 30", () => {
    expect(user.age).toBe(30);
});

test("성별은 남성", () => {
    expect(user.gender).toBe("male");
});
// ********************************
// beforeAll 시작
// beforeEach 2,6
// afterEach 4,10
// afterAll 마지막

// test(() => {
//     3
// })
// describe(() => {
// beforeAll 5
// beforeEach 7
// afterEach 9
// afterAll 마지막 -1
//});
//  ********************************
interface Car {
    brand: string;
    color: string;
}
let car: Car;
describe("Car 관련 직업", () => {
    beforeAll(async () => {
        car = (await fn.connectCarDb()) as { brand: string; color: string };
    });
    afterAll(() => {
        return fn.disconnectCarDb();
    });

    test("차는 BMW", () => {
        expect(car.brand).toBe("BMW");
    });

    test("색은 노란색", () => {
        expect(car.color).toBe("Yellow");
    });
});

let num2 = 0;
test("0더하기 1은 1", () => {
    expect(fn.add(num2, 1)).toBe(1);
});

test("0더하기 2은 2", () => {
    expect(fn.add(num2, 2)).toBe(2);
});

test.skip("0더하기 3은 3", () => {
    expect(fn.add(num2, 3)).toBe(3);
    num = 10;
});

test.only("0더하기 4은 4", () => {
    expect(fn.add(num2, 4)).toBe(4);
});

//mock function

const mockFn = jest.fn();
mockFn();
mockFn(1);

test("함수는 2번 호출됩니다.", () => {
    expect(mockFn.mock.calls.length).toBe(2);
});

test("2번째로 호출된 함수는 전달된 첫번째 인수는 1입니다. ", () => {
    expect(mockFn.mock.calls[1][0]).toBe(1);
});

const mockFn2 = jest.fn();

function forEachAdd1(arr: any[]) {
    arr.forEach((num) => {
        // fn(num + 1)
        mockFn(num + 1);
    });
}
forEachAdd1([10, 20, 30]);

test("함수 호출은 3번됩니다", () => {
    expect(mockFn.mock.calls.length).toBe(3);
});
test("전달된 값은 11,21,31입니다.", () => {
    expect(mockFn.mock.calls[0][0]).toBe(11);
    expect(mockFn.mock.calls[1][0]).toBe(21);
    expect(mockFn.mock.calls[2][0]).toBe(31);
});

const mockFn3 = jest.fn((num) => num + 1);

mockFn3(10);
mockFn3(20);
mockFn3(30);

test("10에서 1 증가한 값이 반환된다", () => {
    expect(mockFn3.mock.results[0].value).toBe(11);
});

test("20에서 1 증가한 값이 반환된다", () => {
    expect(mockFn3.mock.results[1].value).toBe(21);
});

test("30에서 1 증가한 값이 반환된다", () => {
    expect(mockFn3.mock.results[2].value).toBe(31);
});

const mockFn4 = jest.fn();
mockFn4.mockReturnValueOnce(10).mockReturnValueOnce(20).mockReturnValueOnce(30).mockReturnValue(40);

mockFn4();
mockFn4();
mockFn4();
mockFn4();

test("dd", () => {
    console.log(mockFn4.mock.results);
    expect("dd").toBe("dd");
});

const mockFn5 = jest.fn();

mockFn5.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValue(true);

const result = [1, 2, 3, 4, 5].filter((num) => mockFn5(num));

test("홀수는 1,3,5", () => {
    expect(result).toStrictEqual([1, 3, 5]);
});

// mockFn5.mockResolvedValue({
//     namd: "Mike",
// });

// test("받아온 이름은 Mike", () => {
//     mockFn5().then((res: { name: any }) => {
//         expect(res.name).toBe("Mike");
//     });
// });

// jest.mock("./fn", () => ({
//     createUser: jest.fn(), // createUser를 명시적으로 mock 함수로 만듦
//     // 필요하면 다른 함수들도 추가
// }));

// fn.createUser.mockReturnValue({ name: "Mike" });

// test("유저 만들기", () => {
//     const user = fn.createUser("Mike");
//     expect(user.name).toBe("Mike");
// });
