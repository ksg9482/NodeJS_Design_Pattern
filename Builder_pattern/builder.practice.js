// 생성자에 전달되는 매개변수의 값이 많으면 각각의 매개변수 값이 무엇인지 알기 힘들다.
// 개선하는 방법으로는 모든 인자를 하나의 객체 리터럴로 받는 것이 있지만
// 자칫하면 코드를 직접 봐야 할 수도 있고, 일관된 클래스를 생성할 수 있도록 안내하거나 강제하는 방법이 없다.
// 빌더 패턴은 결함을 교정하기 쉽고, 유연한 인터페이스와 일관된 객체 생성을 위한 지침을 제공 할 수 있다.


// class Boat는 생략

class BoatBuilder {
    withMotors(count, brand, model) {
        this.hasMotor = true
        this.motorCount = count
        this.motorBrand = brand
        this.motorModel = model
        return this
    }

    withSails(count, material, color) {
        this.hasSails = true
        this.sailsCount = count
        this.sailsMaterial = material
        this.sailsColor = color
        return this
    }

    hullColor(color) {
        this.hullColor = color
        return this
    }

    withCabin() {
        this.hasCabic = true
        return this
    }

    build() {
        return new Boat({
            hasMotor: this.hasMotor,
            motorCount: this.motorCount,
            motorBrand: this.motorBrand,
            motorModel: this.motorModel,
            hasSails: this.hasSails,
            sailsCount: this.sailsCount,
            sailsMaterial: this.sailsMaterial,
            sailsColor: this.sailsColor,
            hullColor: this.hullColor,
            hasCabic: this.hasCabic
        })
    }
}

const myBoat = new BoatBuilder()
    .withMotors(2, 'best motor', 'B123')
    .withSails(1, 'fabric', 'white')
    .withCabin()
    .hullColor('blue')
    .build()

// 빌더의 역할은 일부 헬퍼(helper)함수를 이용하여 객체를 생성하는데 필요한 모든 매개변수를 모으는 것이다.
// 빌더 패턴은 생성자를 사용하여 객체를 생성할 때 뿐만이 아니라 함수를 호출할 때도 적용 할 수 있다.
// 다른점은 함수 호출에 사용할 경우 build()대신 최종 결과를 반환하는 invoke()함수가 존재한다는 점이다.
