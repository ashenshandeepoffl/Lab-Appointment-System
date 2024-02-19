package LabAppointmentSystem.LabAppointmentSystem.DTO.requestDTO;

import LabAppointmentSystem.LabAppointmentSystem.entity.Roles;

public record RegistrationOrLoginAdminsDTO(String fName, String lName, String email, String mobileNumber, String address,
                                           String nicNumber, String password, Roles role) {
}
