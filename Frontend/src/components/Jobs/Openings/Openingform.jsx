// value={searchQuery}
// onChange={event => setSearchQuery(event.target.value)}
import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
// import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useTheme,
  Select,
  useToast,
  FormErrorMessage 
} from '@chakra-ui/react';

// Validation schema with Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email Address is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  collegeName: Yup.lazy(role =>
    role === 'Student' ? Yup.string().required('College Name is required') : Yup.string()
  ),
  courseDetails: Yup.lazy(role =>
    role === 'Student' ? Yup.string().required('Course Details are required') : Yup.string()
  ),
  companyName: Yup.lazy(role =>
    role === 'Employer' ? Yup.string().required('Company Name is required') : Yup.string()
  ),
  companyEmail: Yup.lazy(role =>
    role === 'Employer' ? Yup.string().email('Invalid email address').required('Company Email Address is required') : Yup.string()
  ),
  companySize: Yup.lazy(role =>
    role === 'Employer' ? Yup.string().required('Company Size is required') : Yup.string()
  ),
});

const jobsForm = () => {
  const theme = useTheme();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      collegeName: '',
      lastQualification: '',
      companyName: '',
      currentRole: '',
      currentCtc: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:5000/api/jobapplications', values);
        toast({
          title: "Application Submitted",
          description: response.data.message || "Thank you for applying!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        formik.resetForm(); // Reset form fields after successful submission
      } catch (error) {
        toast({
          title: "Submission Error",
          description: error.response?.data?.message || "An error occurred. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  });

  return (
    <Box>
      {/* Hero Section with Background Animation */}
      <Box
        position="relative"
        overflow="hidden"
        py={24}
        textAlign="center"
        color="white"
        bgGradient="linear(to-r, #008080, #0083B0)"
      >
        <Container maxW="container.lg" position="relative" zIndex={1}>
          <Heading textColor={"blue.400"} fontFamily={"ClashDisplay"} as="h1" size="2xl" mb={4} textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)">
            Join the TalentConnect Job Program
          </Heading>
          <Text fontSize="xl" mb={6} textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">
            Connect with top job opportunities available to you. Apply now -
          </Text>
        </Container>
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={0}
          _before={{
            content: '""',
            position: 'absolute',
            width: '200%',
            height: '200%',
            top: '-50%',
            left: '-50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 20%)',
            backgroundSize: '20px 20px',
            animation: 'moveBg 20s linear infinite',
          }}
        />
        <style>
          {`
            @keyframes moveBg {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(50%, 50%);
              }
            }
          `}
        </style>
      </Box>

      {/* Form Section */}
      <Box
        p={8}
        maxW="lg"
        mx="auto"
        borderWidth={1}
        borderRadius="lg"
        borderColor={theme.colors.blue[400]}
        boxShadow="2xl"
        bgGradient="linear(to-r, white, blue.50)"
        mt={-10}
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url('https://www.transparenttextures.com/patterns/white-diamond.png')`,
          opacity: 0.2,
          zIndex: -1,
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Text
            fontSize="2xl"
            mb={6}
            fontWeight="bold"
            textAlign="center"
            color="blue.400"
          >
            Apply to this Job
          </Text>

          <Stack spacing={4}>
            {/* Who Are You */}
            <FormControl isInvalid={formik.touched.role && formik.errors.role}>
              <FormLabel>Are You?</FormLabel>
              <Select
                name="role"
                placeholder="Select your role"
                value={formik.values.role}
                onChange={formik.handleChange}
              >
                <option value="Student">Student</option>
                <option value="Employer">Working Professional</option>
              </Select>
              <FormErrorMessage>{formik.touched.role && formik.errors.role}</FormErrorMessage>
            </FormControl>

            {/* Full Name */}
            <FormControl isInvalid={formik.touched.fullName && formik.errors.fullName}>
              <FormLabel>Full Name</FormLabel>
              <Input
                name="fullName"
                placeholder="Enter your full name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.touched.fullName && formik.errors.fullName}</FormErrorMessage>
            </FormControl>

            {/* Email Address */}
            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel>Email Address</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.touched.email && formik.errors.email}</FormErrorMessage>
            </FormControl>

            {/* Phone Number */}
            <FormControl isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                name="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.touched.phoneNumber && formik.errors.phoneNumber}</FormErrorMessage>
            </FormControl>

            {/* Role-Specific Fields */}
            {formik.values.role === 'Student' && (
              <>
                <FormControl isInvalid={formik.touched.collegeName && formik.errors.collegeName}>
                  <FormLabel>College Name</FormLabel>
                  <Input
                    name="collegeName"
                    placeholder="Enter your college's name"
                    value={formik.values.collegeName}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.touched.collegeName && formik.errors.collegeName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.courseDetails && formik.errors.courseDetails}>
                  <FormLabel>Enter your last qualification</FormLabel>
                  <Input
                    name="courseDetails"
                    placeholder="Enter your qualification"
                    value={formik.values.courseDetails}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.touched.courseDetails && formik.errors.courseDetails}</FormErrorMessage>
                </FormControl>
              </>
            )}

            {formik.values.role === 'Employer' && (
              <>
                <FormControl isInvalid={formik.touched.companyName && formik.errors.companyName}>
                  <FormLabel>Company Name</FormLabel>
                  <Input
                    name="companyName"
                    placeholder="Enter your company's name"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.touched.companyName && formik.errors.companyName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.companyEmail && formik.errors.companyEmail}>
                  <FormLabel>Current Role</FormLabel>
                  <Input
                    name="currentrole"
                    placeholder="Enter your current role"
                    value={formik.values.currentRole}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.touched.currentRole && formik.errors.currentRole}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.companySize && formik.errors.companySize}>
                  <FormLabel>Current CTC</FormLabel>
                  <Input
                    name="currentctc"
                    placeholder="Enter your ctc"
                    value={formik.values.currentCtc}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.touched.currentCtc && formik.errors.currentCtc}</FormErrorMessage>
                </FormControl>
              </>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={formik.isSubmitting}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default jobsForm;
