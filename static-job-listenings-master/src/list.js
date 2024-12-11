import React from "react";
import Card from "./card";
import "./list.css";

function List ({ jobs, filters }) {

    const filtering = () => {
        if (filters.length === 0) {
          return jobs; 
        }
        return jobs.filter((job) => {
          const tags = [job.role, job.level].concat(job.languages).concat(job.tools);
          // return filters.every((filter) => tags.includes(filter)); 
          return filters.every((filter) => 
            tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
          );
        });
      };
    
      
      return (
        <div className="list">
            {filtering().map ( (job)=>(
                <Card job={job}></Card>
            )) }
        </div>
      );

}

export default List;
