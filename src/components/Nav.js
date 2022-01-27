const Nav = () => {

    return (
        <div id='nav'>
          <ul className='navList'>
            <li data-menuanchor="page1" className="active"><a href="#page1">To section 1</a></li>
            <li data-menuanchor="page2" className="active"><a href="#page2">To section 2</a></li>
            <li data-menuanchor="page3" className="active"><a href="#page3">To section 3</a></li>
          </ul>
        </div>
    )
}

export default Nav