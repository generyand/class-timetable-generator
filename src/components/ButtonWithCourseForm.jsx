import { useState, useEffect } from "react";
import AddCourseButton from "./AddCourseButton";
import AddCourseForm from "./AddCourseForm";
import { AnimatePresence } from "framer-motion";

function ButtonWithCourseForm({ handleAddCourse }) {
  const [addCourseFormVisible, setAddCourseFormVisible] = useState(false);

  useEffect(() => {
    if (addCourseFormVisible) {
      document.body.classList.add("scroll-disabled");
    } else {
      document.body.classList.remove("scroll-disabled");
    }
  }, [addCourseFormVisible]);

  return (
    <>
      {/* Add Subject Button */}
      <AddCourseButton setAddCourseFormVisible={setAddCourseFormVisible} />

      {/* Add Course Form */}
      <AnimatePresence>
        {addCourseFormVisible && (
          <AddCourseForm
            setAddCourseFormVisible={setAddCourseFormVisible}
            handleAddCourse={handleAddCourse}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default ButtonWithCourseForm;
