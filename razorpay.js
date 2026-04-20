function launchPayment(course) {
  if (course.razorpayUrl) {
    window.location.href = course.razorpayUrl;
  } else {
    alert("Payment link is not available for this course yet.");
  }
}
