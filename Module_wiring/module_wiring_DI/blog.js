import { promisify } from "util";
//db 모듈을 import로 취하지 않고, Blog 클래스 생성자가 db를 인자로 취한다.
export class Blog {
    constructor(db) {
        this.db = db
        this.dbRun = promisify(db.run.bind(db))
        this.dbAll = promisify(db.all.bind(db))
    }
    //생성자의 인자 db는 Blog 클래스의 사용자 컴포넌트로부터 실행(runtime)될 때 제공될 것으로 기대되는 종속성이다.
    //여기서 사용자 컴포넌트는 인젝터가 된다.
    //JS는 추상 인터페이스를 표현하는 방법이 없으므로 제공될 종속성은 db.run()과 db.all()을 구현해야 한다. 이를 덕타이핑이라 한다.

    initiolize() {
        const initQuery = `CREATE TABLE IF NOT EXISTS posts (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`

        return this.dbRun(initQuery)
    }

    createPost (id, title, content, createdAt) {
        return this.dbRun('INSERT INTO posts VALUES (?, ?, ?, ?)',id, title, content, createdAt)
    }

    getAllPosts () {
        return this.dbAll('SELECT * FROM posts ORDER BY created_at DESC')
    }
}