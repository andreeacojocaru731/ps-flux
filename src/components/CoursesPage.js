import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";
import { Link } from "react-router-dom";

function CoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(_courses => { setCourses(_courses) })
    }, [])

    return (<>
        <h2>Courses</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => {
                    return (
                        <tr key={course.id}>
                            <td><Link to={"/course/" + course.slug}></Link></td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
    )
}

export default CoursesPage;