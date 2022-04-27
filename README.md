# sopo-data-server

## 개발 프로세스  

- graphql 스키마를 만든다.  
  - src/feature/{작업폴더}/type.ts 생성  
  - 이미 존재하는 폴더들을 참고하여 스키마를 만든다.  

예시) src/feature/user/type.ts
```  
import { gql } from 'apollo-server-express';

export const UserTypes = gql`
  type User {
    _id: String
    name: String
  }

  type Query {
    getUser(_id: String): User
  }
`;

```  

&nbsp;

- src/App.ts에 위에서 만든 타입을 추가한다.  
```  
const typeDefs = [PostTypes, UserTypes, 임포트하여 여기에 추가];
```  

&nbsp;

- 실행을 하여 스키마가 의도한대로 정의되었는지 확인한다.
```  
> yarn dev

브라우저에 "localhost:4000" 입력 후 등록된 스키마 확인
```  

&nbsp;

- 스키마를 기반으로 타입을 만든다.   
  - graphql generator 실행  

```  
> yarn gen

해당 명령어가 하는 일
1. ./src/**/*.ts 를 돌면서 graphql 스키마(gql)들을 찾는다.  
2. 찾아낸 스키마들을 이용해 type을 만든다.  
3. src/feature/common/graphql-type.ts 파일에 덮어쓴다.  
4. codegen.yml 설정을 통해 위 1,2,3번의 디테일(경로, 타입 등)을 수정 할 수 있다.
```  

&nbsp;

- resolver(구현코드)를 만든다.  
  - src/feature/{작업폴더}/resolver.ts 생성  
  - 스키마의 키에 함수를 연결한다고 보면 된다.  

예시) src/feature/user/resolver.ts
```  
import { QueryGetUserArgs, Resolvers, User } from '../common/graphql-type';

export const UserResolver: Resolvers = {
  Query: {
    getUser: getUser,
  },
};

function getUser(parent: object, args: Partial<QueryGetUserArgs>): User {
  console.log('getUser', args._id);
  return {};
}
```  

&nbsp;

- src/App.ts에 위에서 만든 리졸버를 추가한다.  
```  
const resolvers = [PostResolver, UserResolver, 임포트하여 여기에 추가];
``` 

&nbsp;

- 실행을 하여 리졸버가 의도한대로 실행되는지 확인한다.
```  
> yarn dev

브라우저에 "localhost:4000" 입력 후 쿼리문을 만들어 실행해본다.
```  
