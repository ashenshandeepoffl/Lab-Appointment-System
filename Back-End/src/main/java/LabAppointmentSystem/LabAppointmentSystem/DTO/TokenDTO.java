package LabAppointmentSystem.LabAppointmentSystem.DTO;

import LabAppointmentSystem.LabAppointmentSystem.entity.Roles;

public record TokenDTO(String token,
                       Long id, String fName, String lName, String email, String mobileNumber, String address,
                       String nicNumber, Roles role) {
}
