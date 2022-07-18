빌더는 유창한 인터페이스(fluent interface)를 제공하여 복잡한 객체의 생성을 단순화 한다. 단계별로 객체를 만들 수 있기 때문에, 복잡한 객체를 만들 때 가독성과 일반적인 개발자 사용성이 향상된다.

빌더 패턴의 장점을 살릴수 있는 상황은 인자의 목록이 길거나, 많은 복잡한 매개변수를 입력으로 사용하는 생성자가 있는 클래스이다.

빌더 패턴을 구현하기 위한 일반적인 규칙은 다음과 같다.
* 주요 목적은 복잡한 생성자를 더 읽기 쉽고 관리하기 쉬운 여러 단계로 나누는 것이다.
* 한번에 여러 매개변수를 설정 할 수 있는 빌더 함수를 만든다.
* setter 함수를 통해 입력값이 무엇일지 명확히 하고, 사용자가 알 필요없는 파라미터 세팅 로직을 setter 함수 내에 캡슐화 한다.
* 필요하다면 매개변수를 전달하기 전에 형변환, 정규화, 유효성검사 등을 추가하여 작업을 더 단순화 할 수도 있다. 