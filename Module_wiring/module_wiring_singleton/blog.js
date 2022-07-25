import { promisify } from "util";
import { db } from "./db.js";

const dbRun = promisify(db.run.bind(db))
const dbAll = promisify(db.all.bind(db))

export class Blog {
    initiolize() {
        const initQuery = `CREATE TABLE IF NOT EXISTS posts (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`

        return dbRun(initQuery)
    }

    createPost (id, title, content, createdAt) {
        return dbRun('INSERT INTO posts VALUES (?, ?, ?, ?)',id, title, content, createdAt)
    }

    getAllPosts () {
        return dbAll('SELECT * FROM posts ORDER BY created_at DESC')
    }
}
// blog.js 모듈은 세가지 함수를 가지는 클래스를 내보낸다.
// initiolize() - 테이블이 없을 경우 테이블 생성한다.
// createPost() - 게시물을 생성하는데 필요한 모든 파라미터를 취한다. INSERT문을 실행해 게시물을 추가한다.
// getAllPosts() - 데이터베이스에서 사용 가능한 모든 게시물을 검색하고 이를 배열로 반환한다.