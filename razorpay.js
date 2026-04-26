function launchPayment(course) {
  if (course.razorpayUrl) {
    // The course ID is embedded in the Razorpay redirect URL as ?id=<courseId>
    // We do NOT use localStorage here — cross-origin redirects from rzp.io can
    // block storage access in Safari, Brave, Firefox strict mode & incognito.
    window.location.href = course.razorpayUrl;
  } else {
    alert("Payment link is not available for this course yet.");
  }
}
