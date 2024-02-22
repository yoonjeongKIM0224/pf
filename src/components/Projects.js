function Projects() {
  let projectList = [
    {
        tit: '메리츠화재 공식 보험상품몰',
        desc: '샬라샬라',
        desc2: '구축 퍼블리싱'
    },
    {
        tit: '고용24',
        desc: '뿡',
        desc2: '뺑'
    },
  ]

  return (
    <>
      <ul>
        {projectList.map((item, idx) => (
          <li key={idx}>
            <div>
              <span>{item.tit}</span>
              <span>{item.desc}</span>
              <span>{item.desc2}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Projects;