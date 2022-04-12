import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
          { showProfileData && (
            <Box mr="4" textAlign="right">
              <Text>Rafael Borges</Text>
              <Text color="gray.300" fontSize="small">
                r.borges_19@hotmail.com
              </Text>
            </Box>  
          )}

          <Avatar size="md" name="Rafael Borges" src="https://github.com/RafaelBorges93.png" />
        </Flex>
  )
}