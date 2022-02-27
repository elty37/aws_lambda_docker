FROM public.ecr.aws/lambda/nodejs:14
# Alternatively, you can pull the base image from Docker Hub: amazon/aws-lambda-nodejs:12

# Assumes your function is named "app.js", and there is a package.json file in the app directory
COPY package.json tsconfig.json ${LAMBDA_TASK_ROOT}
COPY src ${LAMBDA_TASK_ROOT}/src

# Install NPM dependencies for function
RUN npm install
# Transpile TypeScript
RUN npm run build

RUN mv dist/* ./
RUN rm -r dist

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app.handler" ]