#!/bin/bash

npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ proto/*.proto





# 1. `#!/bin/bash`: This line is called a "shebang" and tells the system that this script should be interpreted and executed using the Bash shell. It is a common practice to include this line at the beginning of a Bash script.

# 2. `npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ proto/*.proto`: This is the main command that the script is executing. Let's break it down further:

#    - `npx`: As mentioned before, `npx` is a utility that comes with npm (Node Package Manager) and allows running Node.js packages without installing them globally.
   
#    - `proto-loader-gen-types`: This is the name of the Node.js package that is being executed using `npx`. It is a tool for generating TypeScript definitions for gRPC services from Protocol Buffer (`.proto`) files.
   
#    - `--grpcLib=@grpc/grpc-js`: This option specifies the gRPC library to use for generating the TypeScript definitions. In this case, it indicates that the definitions should be generated for the `@grpc/grpc-js` library, which is a popular Node.js gRPC implementation.
   
#    - `--outDir=proto/`: This option sets the output directory where the generated TypeScript files will be placed. In this script, the `proto/` directory will be used to store the generated files.
   
#    - `proto/*.proto`: This part of the command specifies the input files for which the TypeScript definitions will be generated. It uses a wildcard pattern (`*.proto`) to select all `.proto` files in the `proto/` directory. The `proto/` directory is relative to the location of the script.

# So, in summary, this script runs the `proto-loader-gen-types` Node.js package with specific options (`--grpcLib=@grpc/grpc-js` and `--outDir=proto/`) and generates TypeScript definitions for gRPC services from all Protocol Buffer (`.proto`) files present in the `proto/` directory. The generated TypeScript files will be placed in the `proto/` directory as well.

# It's important to note that the effectiveness of this script depends on the existence of appropriate `.proto` files in the `proto/` directory and the successful installation of the `proto-loader-gen-types` package with its dependencies, which typically requires Node.js and npm to be installed on the system.