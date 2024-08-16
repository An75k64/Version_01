import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
  useTheme,
} from '@chakra-ui/react';

// Validation schema
const validationSchema = Yup.object({  
  companyName: Yup.string().required('Company Name is required'),
  industry: Yup.string().required('Industry Name is required'),
  location: Yup.string().required('Location is required'),
  companySize: Yup.number().required('Company Size is required').positive().integer(),
  contactEmail: Yup.string().email('Invalid email address').required('Contact Person Email is required'),
  contactPhone: Yup.string().required('Mobile Number is required').matches(/^[0-9]{10}$/, 'Mobile Number must be exactly 10 digits'),
  partnershipInterests: Yup.array().min(1, 'At least one Partnership Interests must be selected'),
    
});


const CompanyForm = () => {
  const theme = useTheme();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      companyName: '',
      industry: '',
      location: '',
      companySize: '',
      contactPerson: '',
      contactEmail: '',
      contactPhone: '',
      partnershipInterests: [],
      additionalInfo: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:5000/api/company/submit-company-form', values);
        toast({
          title: "Comapny details submitted.",
          description: response.data,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        formik.resetForm(); // Reset form fields after successful submission
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: error.response?.data || "Unable to submit company details.",
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
          <Heading textColor={"blue.400"}  fontFamily={"ClashDisplay"} as="h1" size="2xl" mb={4} textShadow="2px 2px 4px rgba(0, 0, 0, 0.6)">
            Partner with TalentConnect
          </Heading>
          <Text fontSize="xl" mb={6} textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">
            Enhance your hiring potential with top talent. Connect with us and transform your recruitment today!
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
        <Text
          fontSize="2xl"
          mb={6}
          fontWeight="bold"
          textAlign="center"
          color="blue.400"
        >
          Submit Your Company Details
        </Text>

        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
            {/* Company Name */}
            <FormControl isInvalid={formik.touched.companyName && formik.errors.companyName}>
              <FormLabel fontWeight="bold">Company Name</FormLabel>
              <Input
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                placeholder="Enter company name"
              />
              <Text color="red.500" fontSize="sm">
                {formik.errors.companyName}
              </Text>
            </FormControl>

            {/* Industry */}
            <FormControl isInvalid={formik.touched.industry && formik.errors.industry}>
              <FormLabel fontWeight="bold">Industry</FormLabel>
              <Input
                name="industry"
                value={formik.values.industry}
                onChange={formik.handleChange}
                placeholder="Enter industry"
              />
              <Text color="red.500" fontSize="sm">
                {formik.errors.industry}
              </Text>
            </FormControl>

            {/* Location */}
            <FormControl isInvalid={formik.touched.location && formik.errors.location}>
              <FormLabel fontWeight="bold">Location</FormLabel>
              <Input
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                placeholder="Enter location"
              />
              <Text color="red.500" fontSize="sm">
                {formik.errors.location}
              </Text>
            </FormControl>

            {/* Company Size */}
            <FormControl isInvalid={formik.touched.companySize && formik.errors.companySize}>
              <FormLabel fontWeight="bold">Company Size</FormLabel>
              <Input
                type="number"
                name="companySize"
                value={formik.values.companySize}
                onChange={formik.handleChange}
                placeholder="Enter number of employees"
              />
              <Text color="red.500" fontSize="sm">
                {formik.errors.companySize}
              </Text>
            </FormControl>

            {/* Contact Person */}
            <FormControl isInvalid={formik.touched.contactPerson && formik.errors.contactPerson}>
              <FormLabel fontWeight="bold">Contact Person</FormLabel>
              <Input
                name="contactPerson"
                value={formik.values.contactPerson}
                onChange={formik.handleChange}
                placeholder="Enter contact person's name"
              />
              <Text color="red.500" fontSize="sm">
                {formik.errors.contactPerson}
              </Text>
            </FormControl>

            {/* Contact Email */}
            <FormControl isInvalid={formik.touched.contactEmail && formik.errors.contactEmail}>
              <FormLabel fontWeight="bold">Contact Email Address</FormLabel>
              <Input
                type="email"
                name="contactEmail"
                value={formik.values.contactEmail}
                onChange={formik.handleChange}
                placeholder="Enter email"
              />
              <Text color="red.500" fontSize="sm">
                {formik.errors.contactEmail}
              </Text>
            </FormControl>

            {/* Contact Phone */}
            <FormControl isInvalid={formik.touched.contactPhone && formik.errors.contactPhone}>
              <FormLabel fontWeight="bold">Contact Phone Number</FormLabel>
              <Input
                type="tel"
                name="contactPhone"
                value={formik.values.contactPhone}
                onChange={formik.handleChange}
                placeholder="Enter phone number"
              />
              <Text color="red.500" fontSize="sm">
                {formik.errors.contactPhone}
              </Text>
            </FormControl>

            {/* Partnership Interests */}
            <FormControl isInvalid={formik.touched.partnershipInterests && formik.errors.partnershipInterests}>
              <FormLabel fontWeight="bold">Partnership Interests (Select all that apply)</FormLabel>
              <CheckboxGroup
                name="partnershipInterests"
                value={formik.values.partnershipInterests}
                onChange={(value) => formik.setFieldValue('partnershipInterests', value)}
              >
                <Stack spacing={2}>
                  <Checkbox value="Campus Drives">Campus Drives</Checkbox>
                  <Checkbox value="Staffing Solution">Staffing Solution</Checkbox>
                  <Checkbox value="Internship Programs">Internship Programs</Checkbox>
                  <Checkbox value="Part of Job Fairs">Part of Job Fairs</Checkbox>
                  <Checkbox value="Employee Training Programs">Employee Training Programs</Checkbox>
                </Stack>
              </CheckboxGroup>
              <Text color="red.500" fontSize="sm">
                {formik.errors.partnershipInterests}
              </Text>
            </FormControl>

            {/* Additional Information */}
            <FormControl>
              <FormLabel fontWeight="bold">Additional Information</FormLabel>
              <Textarea
                name="additionalInfo"
                value={formik.values.additionalInfo}
                onChange={formik.handleChange}
                placeholder="Provide any additional information or specific requirements"
              />
            </FormControl>

            {/* Consent Notice */}
            <Text mt={4} fontSize="sm" color="gray.600">
              Note: By applying here you provide consent to share your personal data with TalentConnect. The personal data would be processed for partnership purposes and would be within TalentConnect data protection notice. Read our Privacy Statement and Website Terms and Conditions for more information.
            </Text>

            {/* Submit Button */}
            <Button
              mt={6}
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
              _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default CompanyForm;
