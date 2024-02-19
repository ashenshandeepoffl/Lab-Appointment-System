package LabAppointmentSystem.LabAppointmentSystem.mappers;

import LabAppointmentSystem.LabAppointmentSystem.DTO.TokenDTO;
import LabAppointmentSystem.LabAppointmentSystem.entity.Roles;
import org.springframework.stereotype.Component;

@Component
public class TokenMapper {
    public TokenDTO tokenToDTO(String token, Long id, String fName, String lName, String email, String mobileNumber,
                               String address, String nicNumber, Roles role){
        return new TokenDTO(
                token, id, fName, lName,email, mobileNumber, address, nicNumber, role);
    }
}
