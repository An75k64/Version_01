import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Textarea,
  useTheme,
  Select,
  useToast,
  FormErrorMessage,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

// Validation schema with Yup
const validationSchema = Yup.object({
  role: Yup.string().required('Role is required'),
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email Address is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[\W_]/, 'Password must contain at least one special character'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
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
  motivation: Yup.string().required('Motivation is required'),
  comments: Yup.string()
});

const PasswordInput = (props) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <InputRightElement>
        <IconButton
          aria-label={show ? 'Hide password' : 'Show password'}
          icon={show ? <ViewOffIcon /> : <ViewIcon />}
          onClick={handleClick}
          variant="link"
        />
      </InputRightElement>
      <Input
        type={show ? 'text' : 'password'}
        {...props}
      />
    </InputGroup>
  );
};

const AffiliateForm = () => {
  const theme = useTheme();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      role: '',
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      collegeName: '',
      courseDetails: '',
      companyName: '',
      companyEmail: '',
      companySize: '',
      motivation: '',
      comments: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:5000/api/affiliate', values);
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
            Join the TalentConnect Affiliate Program
          </Heading>
          <Text fontSize="xl" mb={6} textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">
            Partner with us to earn rewards by referring candidates for top job opportunities. Sign up now and start earning!
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
            Register to Become an Affiliate
          </Text>

          <Stack spacing={4}>
            {/* Who Are You */}
            <FormControl isInvalid={formik.touched.role && formik.errors.role}>
              <FormLabel>Who Are You?</FormLabel>
              <Select
                name="role"
                placeholder="Select your role"
                value={formik.values.role}
                onChange={formik.handleChange}
              >
                <option value="Student">Student</option>
                <option value="Employer">Employer</option>
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

            {/* Password */}
            <FormControl isInvalid={formik.touched.password && formik.errors.password}>
              <FormLabel>Password</FormLabel>
              <PasswordInput
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.touched.password && formik.errors.password}</FormErrorMessage>
            </FormControl>

            {/* Confirm Password */}
            <FormControl isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}>
              <FormLabel>Confirm Password</FormLabel>
              <PasswordInput
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.touched.confirmPassword && formik.errors.confirmPassword}</FormErrorMessage>
            </FormControl>

            {/* Phone Number */}
            <FormControl isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.touched.phoneNumber && formik.errors.phoneNumber}</FormErrorMessage>
            </FormControl>

            {/* Conditional Fields Based on Role */}
            {formik.values.role === 'Student' && (
              <>
                <FormControl isInvalid={formik.touched.collegeName && formik.errors.collegeName}>
                  <FormLabel>College Name</FormLabel>
                  <Input
                    name="collegeName"
                    placeholder="Enter your college name"
                    value={formik.values.collegeName}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.touched.collegeName && formik.errors.collegeName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.courseDetails && formik.errors.courseDetails}>
                  <FormLabel>Course Details</FormLabel>
                  <Input
                    name="courseDetails"
                    placeholder="Enter your course details"
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
                    placeholder="Enter your company name"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.touched.companyName && formik.errors.companyName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.companyEmail && formik.errors.companyEmail}>
                  <FormLabel>Company Email Address</FormLabel>
                  <Input
                    name="companyEmail"
                    type="email"
                    placeholder="Enter your company's email address"
                    value={formik.values.companyEmail}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.touched.companyEmail && formik.errors.companyEmail}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.companySize && formik.errors.companySize}>
                  <FormLabel>Company Size</FormLabel>
                  <Select
                    name="companySize"
                    placeholder="Select company size"
                    value={formik.values.companySize}
                    onChange={formik.handleChange}
                  >
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                  </Select>
                  <FormErrorMessage>{formik.touched.companySize && formik.errors.companySize}</FormErrorMessage>
                </FormControl>
              </>
            )}

            {/* Motivation */}
            <FormControl isInvalid={formik.touched.motivation && formik.errors.motivation}>
              <FormLabel>Why do you want to join the TalentConnect Affiliate Program?</FormLabel>
              <Textarea
                name="motivation"
                placeholder="Describe your motivation to join the program"
                value={formik.values.motivation}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.touched.motivation && formik.errors.motivation}</FormErrorMessage>
            </FormControl>

            {/* Comments */}
            <FormControl isInvalid={formik.touched.comments && formik.errors.comments}>
              <FormLabel>Additional Comments</FormLabel>
              <Textarea
                name="comments"
                placeholder="Any additional comments or information"
                value={formik.values.comments}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.touched.comments && formik.errors.comments}</FormErrorMessage>
            </FormControl>

            {/* Submit Button */}
            <Button colorScheme="blue" type="submit" mt={4}>
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default AffiliateForm;
