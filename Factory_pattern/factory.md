javascript의 동적 타이핑을 통해 상황에 따라 new 연산자로 인스턴스화 된 객체를, 다른 상황에선 간단한 객체 리터럴을 반환할 수 있다. 

팩토리함수 내에서 원하는 방식으로 객체를 생성할 수 있는데, 추가적인 초기화 단계를 실행하거나 특정 조건에 따라 다른 유형의 객체를 반환할 수 있는 것이다. 이는 세부사항을 사용자와 분리함으로서 가능한 일이다.

실제로 팩토리 패턴은 Node.js에서 매우 일반적이다.

### node index.js 221로 실행했을 경우
Timer "Finding all factors of 221" took 0 seconds   
            and 28000 nanoseconds.
Factor of 221 are:  [ 13, 17 ]

#### NODE_ENV=production node index.js 221로 실행했을 경우
Factor of 221 are:  [ 13, 17 ]   
   
production환경으로 설정했기 때문에 profiler가 작동하지 않았다.