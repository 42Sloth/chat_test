# 요구사항

back
1. create room entity (id, password)
2. create room controller (create room, delete room, update room (password 변경), room list 조회)
3. create room service

front
1. create or delete room
2. room list
3. chat

# Room CRUD (07.07)

### 로직 설명
1. all
    * /room  
      현재 저장되어있는 roomList를 조회.
2. create
    * /room  
    data = {"password":"1234"}  
      비밀번호가 1234인 room 생성
3. update
    * /room/id  
    Param = id  
      Body = password  
      id가 동일한 room의 password 변경
4. delete
    * /room/id  
    Param = id  
      id와 같은 room 삭제
### 파일 설명
1. room.module.ts
    * @Module
        * 모듈부 등록
    * imports: [TypeOrmModule.forFeature([Room])]
        * TypeOrmModule을 이용하여 db의 Room에 접근한다.
    * controllers: [RoomController]
        * room.controller로부터 controller를 가져온다.
    * providers: [RoomService]
        * Service를 Nest Core에 등록. [[NestJS] Providers 개념 및 실습](https://medium.com/crocusenergy/nestjs-providers-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EC%8B%A4%EC%8A%B5-e811bccb809a)
    
2. room.entity.ts
    * @PrimaryGeneratedColumn
        * index를 자동 생성해줌.

3. room.service.ts
    * @Injectable()
        * DI을 가능하게 해주어 Controller에서 Sevice를 사용 가능하게 함.

4. room.controller.ts
    * 외부로부터 요청을 받아 해당하는 Method에 의해 Sevice의 로직을 실행하고 결과를 리턴.