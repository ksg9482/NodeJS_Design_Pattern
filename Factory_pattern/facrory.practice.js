function createImage (name) {
    return new Image(name)
};

const image = createImage('photo.jpeg');

/*
왜 그냥 const image = new Image(name); 처럼 쓰지 않는가?
new를 사용하면 코드를 특정 유형의 객체에 바인딩되기 때문이다. 이 경우에 Image 객체 유형이 된다.
반면에 팩토리는 더 큰 유연성을 제공한다.

만약 이미지 형식마다 하나의 클래스를 지원해주려면 팩토리만 조금 수정해주면 된다.
*/

//Upgrade는 createImage가 이미 선언되어 있기에 구분을 위해 붙혔다. 
function createImageUpgrade(name) {
    if(name.match(/\.jpe?g$/)) {
        return new ImageJpeg(name);
    } else if(name.match(/\.gif$/)) {
        return new ImageGif(name);
    } else if(name.match(/\.png$/)) {
        return new ImagePng(name);
    } else {
        throw new Error('Unsupported Format');
    };
};


// 팩토리는 클래스를 숨겨, 멋대로 확장하거나 수정하는 것을 막아준다. 팩토리를 사용하면 클래스를 비공개로 유지 할 수 있다.
// 즉, 클로저 덕분에 팩토리는 캡슐화 매커니즘으로 사용 할 수도 있다.
// 자바스크립트에서 캡슐화를 적용하는 주요 방법 중 하나는 함수의 스코프와 클로저를 사용하는 것이다.
// 팩토리는 쉽게 프라이빗 변수들을 강제할 수 있다.


function createPerson (name) {
    // 클로저를 이용해서 두 개의 객체를 생성했다. 
    // 하나는 팩토리가 반환하는 퍼블릭 인터페이스인 person 객체이다.
    // 또 하나는 person 객체가 제공하는 인터페이스만을 통해 접근할 수 있는 privateProperties이다.
    const privateProperties = {};

    const person = {
        setName (name) { //이를 통해 person 객체의 name 속성은 반드시 값을 가진다는 것을 알 수 있다.
            if (!name) {
                throw new Error('A person must have a name');
            }
            privateProperties.name = name;
        },
        getName () {
            return privateProperties;
        }
    };

    person.setName(name);
    return person;
}