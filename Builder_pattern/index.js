import { UrlBuilder } from "./builder.url";

const url = new UrlBuilder()
    .setProtocol('https')
    .setAuthentication('user', 'pass')
    .setHostname('example.com')
    .build()

console.log(url.toString)

// 각 setter 함수는 설정하는 매개변수에 대한 힌트를 명확히 제공하고,
// 매개변수를 설정하는 방법에 대한 지침을 제공한다.(예: username과 password는 함께 설정해야 한다.)