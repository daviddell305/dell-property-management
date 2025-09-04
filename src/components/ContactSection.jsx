const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Temporary: Just show success message without API call
    setTimeout(() => {
      toast({
        title: "Message Received!",
        description: "Thank you for your interest! Please call us at (555) 123-4567 or email info@dellpropertymanagement.com",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };
