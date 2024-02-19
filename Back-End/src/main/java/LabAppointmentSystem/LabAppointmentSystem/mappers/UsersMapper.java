package LabAppointmentSystem.LabAppointmentSystem.mappers;

import LabAppointmentSystem.LabAppointmentSystem.DTO.UsersDTO;
import LabAppointmentSystem.LabAppointmentSystem.DTO.requestDTO.RegistrationOrLoginAdminsDTO;
import LabAppointmentSystem.LabAppointmentSystem.entity.Users;
import org.springframework.stereotype.Component;

@Component
public class UsersMapper {
    public Users dtoToEntityForRegOrLogin(RegistrationOrLoginAdminsDTO registrationOrLoginForAdminsDTO) {
        return new Users(
                registrationOrLoginForAdminsDTO.fName(),
                registrationOrLoginForAdminsDTO.lName(),
                registrationOrLoginForAdminsDTO.email(),
                registrationOrLoginForAdminsDTO.mobileNumber(),
                registrationOrLoginForAdminsDTO.address(),
                registrationOrLoginForAdminsDTO.nicNumber(),
                registrationOrLoginForAdminsDTO.password(),
                registrationOrLoginForAdminsDTO.role()
        );
    }
    public UsersDTO EntityToDTO(Users user) {
        return new UsersDTO(
                user.getId(),
                user.getfName(),
                user.getlName(),
                user.getEmail(),
                user.getAddress(),
                user.getMobileNumber(),
                user.getNicNumber());
    }
}
