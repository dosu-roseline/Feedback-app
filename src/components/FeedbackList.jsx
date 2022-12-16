import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  // return (
  //   <div className="feedback-list">
  //     <AnimatePresence>
  //       {feedback.map((item) => {
  //         <motion.div
  //         key={item.id}
  //         initial={{opacity: 0}}
  //         animate={{opacity: 1}}
  //         exit={{opacity: 0}}
  //         >
  //           <FeedbackItem
  //             key={item.id}
  //             item={item}
  //             handleDelete={handleDelete}
  //           />
  //         </motion.div>
  //       })}
  //     </AnimatePresence>
  //   </div>
  // );

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} item={item}  />
        );
      })}
    </div>
  );
}

// FeedbackList.propsTypes = {
//   feedback: PropsTypes.arrayOf(
//     PropsTypes.shape({
//       id: PropsTypes.number.isRequired,
//       text: PropsTypes.string.isRequired,
//       rating: PropsTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
