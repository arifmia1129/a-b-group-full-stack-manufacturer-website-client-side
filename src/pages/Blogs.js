import React from 'react';
import code from "../assets/code.JPG";

const Blogs = () => {


    // const searchText = "pen";
    // const products = [
    //     { product: "Pen", price: 10, des: "good" },
    //     { product: "Book", price: 50, des: "good" },
    //     { product: "Note", price: 20, des: "good" },
    // ]

    // const result = products.filter(single => single.product.toLowerCase() === searchText.toLowerCase());
    // console.log(result);

    return (
        <div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-1: How will you improve the performance of a React Application?</h3>
                <div className='text-secondary'>
                    A-1:
                    <ul>
                        <li>1. Use the Production Build</li>
                        <li>2. Create React App: When build project use Create React App</li>
                        <li>3. Single File Builds: Production ready as single files.</li>
                        <li>4. Browserify: Install a few plugins.</li>
                        <li>5. Avoid Reconciliation. etc.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-2: What are the different ways to manage a state in a React application?</h3>
                <div className='text-secondary'>
                    A-2:
                    <ul>
                        <li>1. Local state: (useState)</li>
                        <li>2. Global state: (useContex)</li>
                        <li>3. Server state (useState+useEffect, React useQuery)</li>
                        <li>4. URL state</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-3: How does prototypical inheritance work?</h3>
                <div className='text-secondary'>
                    A-3:
                    <img src="https://www.educative.io/api/page/6187859468877824/image/download/6346760642363392" alt="" />
                    <ul>
                        <li>In JavaScript, when an object shares the properties of another object through a prototypical chain, it is called prototypical inheritance. Child inherits property from his parents. If there is any JavaScript on it then use them. If the last thing is not found, the null is found. Basically that's how it works.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h3>
                <div className='text-secondary'>
                    A-4:
                    <ul>
                        <li>Because if I set direct then I will not be able to update later easily. And if we do it through useState ([]) then next
                            I can keep the updates in the state variable using setState.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <div className='text-secondary'>
                    A-5:
                    <img className='w-full' src={code} alt="" />
                    <ul>
                        <li>First all off to get search name from user using input form. Then implement find operation on array of product. Then you got proper product that you found. For better performance you can do lower case when you run find operation.</li>

                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-6: What is a unit test? Why should write unit tests?</h3>
                <div className='text-secondary'>
                    A-6:
                    <ul>
                        <li>Software developer implement unit test so that test their software part. That means unit. Make sure unit test because of they test some part functionality and ui or other working properly or not. It's important for every developer.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;