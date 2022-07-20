import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import sqlite3 from 'sqlite3'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const db = new sqlite3.Database(
    join(__dirname, 'data.sqlite')
)

//데이터 파일을 가리키는 데이터베이스의 새로운 인스턴스를 만들고 
//데이터베이스 연결 객체를 db라는 이름의 싱글톤으로 내보낸다.