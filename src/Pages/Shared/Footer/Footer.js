import React from 'react';
// import logo from '../../Assets/5033256-middle.png';

const Footer = () => {
    return (
        <footer class="footer py-20 px-36 bg-blue-500 text-white">
            <div>
                <div className='text-2xl font-bold text-white flex'>
                    {/* <img src={logo} alt="" />
                    Parts */}
                    <h2>Tech Zone</h2>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing<br/>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
                <span class="footer-title">Services</span>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span class="footer-title">Newsletter</span>
                <div class="form-control w-80">
                    <label class="label">
                        <span>Enter your email address</span>
                    </label>
                    <div class="relative">
                        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                        <button class="btn absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;