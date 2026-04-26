function launchPayment(course) {
  if (course.razorpayUrl) {
    // Save the course ID so we know which course the user paid for after redirect
    localStorage.setItem('pendingCourseId', course.id);
    window.location.href = course.razorpayUrl;
  } else {
    alert("Payment link is not available for this course yet.");
  }
}
