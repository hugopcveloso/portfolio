import React, {useState, useEffect} from 'react'
import Button from '../components/button';
import List from '../components/stack-list';

const Stack = () => {
  const [filterStack, setFilterStack] = useState([])

  useEffect(()=>{
    console.log('render')
    return (
      console.log('return render')
    )
  } )

  const handleClick = async (clicked) => {
    debugger
    const stackIndex = await filterStack.indexOf(clicked);
    let stackArray =  filterStack
    if (stackIndex < 0) {
      stackArray.push(clicked);
    } else {
      stackArray.splice(stackIndex, 1);
    }
    setFilterStack(stackArray);
   
    console.log(filterStack)
  };

  return (
    <div>
      	<div className="section-container" id="tech-section">
					<div className="skills-title">
						<h2> Tech Stack </h2>
					</div>
					{/* <div className="skills-navbar">
						<Button stack="Developer" onClick={handleClick("Developer")}  />
						<Button stack="Designer" onClick={handleClick("Designer")}  />
						<Button stack="Marketing" onClick={handleClick("Marketing")}   />
          </div> */}
					<List filterStack={filterStack} />
				</div>
    </div>
  )
}

export default Stack
