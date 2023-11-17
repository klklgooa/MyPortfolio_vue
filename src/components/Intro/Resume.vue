<template>
  <div id="resume">
    <span id="resume_span">1.기초 자료</span>
    <table>
      <tr>
        <td rowspan="6" id="id_photo_td"><img class="id_photo" src="../../image/id_photo.png" alt="woo1" /></td>
        <td background-color="lightGray">성 명</td>
        <td>황인찬</td>
        <td background-color="lightGray">한 문</td>
        <td>黃仁贊</td>
      </tr>
      <tr>
        <td background-color="lightGray">주민등록번호</td>
        <td colspan="3">970310-1080000</td>
      </tr>
      <tr>
        <td background-color="lightGray">E-mail</td>
        <td colspan="3">klklgooa@naver.com</td>
      </tr>
      <tr>
        <td background-color="lightGray">전화번호</td>
        <td>02-404-0000</td>
        <td background-color="lightGray">휴대폰</td>
        <td>010-5413-0707</td>
      </tr>
      <tr>
        <td background-color="lightGray">우편번호</td>
        <td>324234</td>
        <td background-color="lightGray">비상연락처</td>
        <td>112</td>
      </tr>
      <tr>
        <td background-color="lightGray">주소</td>
        <td colspan="3">서울시 송파구 송파대로345</td>
      </tr>
    </table>
    <br />
    <span>2.학력사항</span>
    <table>
      <tr>
        <th background-color="lightGray">기간</th>
        <th background-color="lightGray">상세내용</th>
        <th background-color="lightGray">비고</th>
      </tr>
      <tr>
        <td>2004.03.02~2010.02.24</td> <td>잠실초등학교</td> <td>졸업</td>
      </tr>
      <tr>
        <td>2010.03.02~2013.02.24</td> <td>잠실중학교</td> <td>졸업</td>
      </tr>
      <tr>
        <td>2013.03.02~2016.02.24</td> <td>잠실고등학교</td> <td>졸업</td>
      </tr>
      <tr>
        <td>2021.03.02~</td> <td>가천대학교</td> <td>재학</td>
      </tr>
    </table>
    <br />
    <span>3. 경력사항</span>
    <table>
      <tr>
        <th background-color="lightGray">기간</th>
        <th background-color="lightGray">회사</th>
      </tr>
      <tr>
        <td>2022.06.24~2022.07.24</td> <td>MSTC</td>
      </tr>
      <tr>
        <td>~</td> <td></td>
      </tr>
      <tr>
        <td>~</td> <td></td>
      </tr>
      <tr>
        <td>~</td> <td></td>
      </tr>
    </table>
    <br />
    <span>4. 개인능력 및 장단점</span>
    <table>
      <tr height="30">
        <td rowspan="4" background-color="lightGray">자격증 및 포상</td>
        <td colspan="3">정보처리기사</td>
        <td colspan="1">한국산업인력공단</td>
      </tr>
      <tr height="30">
        <td colspan="3">운전면허증</td>
        <td colspan="1">서울시경찰청</td>
      </tr>

      <tr height="30">
        <td colspan="3">네트워크관리사2급</td>
        <td colspan="1">한국정보통신자격협회</td>
      </tr>
      <tr height="30">
        <td colspan="3">SQL Developer</td>
        <td colspan="1">데이터자격검정</td>
      </tr>

      <tr height="30">
        <td rowspan="3" background-color="lightGray">컴퓨터능력</td>
        <td colspan="2">JAVA</td>
        <td background-color="lightGray">상/중/하</td>
        <td>상</td>
      </tr>
      <tr height="30">
        <td colspan="2">Spring</td>
        <td background-color="lightGray">상/중/하</td>
        <td>상</td>
      </tr>
      <tr height="30">
        <td colspan="2">React</td>
        <td background-color="lightGray">상/중/하</td>
        <td>상</td>
      </tr>
      <tr height="30">
        <td rowspan="2" background-color="lightGray">취미</td>
        <td colspan="2">낚시</td>
        <td background-color="lightGray">특기</td>
        <td>글짓기</td>
      </tr>
    </table>

    <div id="pledge">
      <br />위의 사실이 틀림이 없음을 서약합니다.<br />
      작성일 2023년 10월 25일<br />
      작성자 (인)
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
};
</script>

<style scoped>
/* Resume 페이지의 CSS 스타일이 필요하다면 추가하세요. */
</style>
