function movieRankfirst() {
  const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt=20250531`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //1. 순위가 1위인 영화 제목을 출력
      const firstMovie = res.boxOfficeResult.dailyBoxOfficeList[0];
      console.log(`현재 1위 영화 ==> ${firstMovie.movieNm}`);
    });
}

function movieRank() {
  const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt=20250531`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //1. rank 와 영화제목을 모두 출력
        console.log("전체 영화 순위와 제목을 알려드려요.");

        res.boxOfficeResult.dailyBoxOfficeList.forEach(movie => {
        console.log(`순위 : ${movie.rank}위\n` +  `제목 : ${movie.movieNm}`);
      })
    });
}
movieRankfirst();
movieRank();