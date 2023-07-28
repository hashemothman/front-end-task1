import"./FooterStyle.css"

const Footer = () => {
  return (
    <div className='footer'> 
        <div className="logo">
        <span></span>
        <span></span>
        <span></span>
        <h2>Starter</h2>

    </div>
    <nav>
         <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Docs</a></li>
                <li><a href="#">GitHub</a></li>
                
        </ul>
    </nav>
    <div className="social-icon">
        <ul>
         <li><i class="fa-brands fa-github" ></i></li>
         <li><i class="fa-brands fa-facebook"></i></li>
         <li><i class="fa-brands fa-twitter"></i></li>
         <li><i class="fa-brands fa-youtube"></i></li>
         <li><i class="fa-brands fa-linkedin"></i></li>   
         <li><i class="fa-brands fa-slack"></i></li>
         <li><i class="fa-solid fa-rss"></i></li>
        </ul>
    </div>
    <div className="copyright">
        <p>Ⓒ Copyright 2021 Nextjs Starter Powered with .by <a href="">CreativeDesignGuru</a></p>
    </div>
</div>
  )
}

export default Footer