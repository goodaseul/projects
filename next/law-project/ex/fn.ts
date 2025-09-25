const fn: fnType = {
    add: (num1: any, num2: any) => num1 + num2,
    makeUser: (name: string, age: number, gender?: string) => ({ name, age, gender }),
    thorwErr: () => {
        throw new Error("XX");
    },

    getName: (callback: (arg0: string) => void) => {
        const name = "Mike";
        setTimeout(() => {
            callback(name);
            // throw new Error("서버 에러..");
        }, 3000);
    },
    getAge: () => {
        const age = 30;
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(age);
                // rej('error')
            }, 3000);
        });
    },

    createUser: (name: any) => {
        console.log("실제로 사용자가 생성되었습니다.");
        return {
            name,
        };
    },
    connectUserDb: () => {
        return new Promise((res) => {
            setTimeout(() => {
                res({
                    name: "Mike",
                    age: 30,
                    gender: "male",
                });
            }, 500);
        });
    },
    disconnectDb: () => {
        return new Promise<void>((res) => {
            setTimeout(() => {
                res();
            }, 500);
        });
    },
    connectCarDb: () => {
        return new Promise((res) => {
            setTimeout(() => {
                res({
                    brand: "BMW",
                    color: "Yellow",
                });
            }, 500);
        });
    },
    disconnectCarDb: () => {
        return new Promise<void>((res) => {
            setTimeout(() => {
                res();
            }, 500);
        });
    },
};

interface fnType {
    add: (num1: any, num2: any) => any;
    makeUser: (
        name: string,
        age: number,
        gender?: string
    ) => {
        name: string;
        age: number;
        gender: string | undefined;
    };
    thorwErr: () => never;
    getName: (callback: (arg0: string) => void) => void;
    getAge: () => Promise<unknown>;
    createUser: (name: any) => {
        name: any;
    };
    connectUserDb: () => Promise<unknown>;
    disconnectDb: () => Promise<void>;
    connectCarDb: () => Promise<unknown>;
    disconnectCarDb: () => Promise<void>;
}

export default fn;
