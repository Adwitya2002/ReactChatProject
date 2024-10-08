import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className='user'>
        <img src="./avatar.png" alt=""/>
        <h2>Adwitya Tripathi</h2>
        <p>Software Developer</p>
      </div>
      <div className='info'>
        <div className='option'>
          <div className='title'>
            <span> Chat settings</span>
            <img src="./arrowUp.png" alt=""/>
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span> Privacy and help</span>
            <img src="./arrowUp.png" alt=""/>
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span> Shared Photos</span>
            <img src="./arrowDown.png" alt=""/>
          </div>
          <div className='photos'>
            <div className='photoItem'>
            <div className='photoDetail'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6L8JAkJnZj9v9kFF7CiffGBPJKp8A9tDtyg&s" alt="" />
            <span>Photo_2024.png</span>
            </div>
            <img src="./download.png" alt="" className='icon'></img>
            </div>
            <div className='photoItem'>
            <div className='photoDetail'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6L8JAkJnZj9v9kFF7CiffGBPJKp8A9tDtyg&s" alt="" />
            <span>Photo_2024.png</span>
             </div>
            <img src="./download.png" alt="" className='icon'></img>
            </div>
            <div className='photoItem'>
            <div className='photoDetail'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6L8JAkJnZj9v9kFF7CiffGBPJKp8A9tDtyg&s" alt="" />
            <span>Photo_2024.png</span>
            </div>
            <img src="./download.png" alt="" className='icon'></img>
            </div>
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span> Shared Files</span>
            <img src="./arrowUp.png" alt=""/>
          </div>
        </div>
      </div>
      <button>Block User</button>
      <button className='logout'>Logout</button>
      </div>
  )
}

export default Detail