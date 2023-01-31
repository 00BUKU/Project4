import React from 'react';

const HomePage = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Book a Pod</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
        <h1>Welcome to PodLux</h1>
        <p>A place to escape and recharge with a comfortable pod experience.</p>
        <button>Book a Pod</button>
      </main>
    </div>
  );
};


export default HomePage;