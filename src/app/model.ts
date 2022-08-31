export interface LoginResponse {
  "jwt": string
}

export interface User{

}

// @Entity
// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// @Builder
// public class User {
//
//   private Long id;
//
//   private String username;
//
//   private String firstName;
//
//
//   private String lastName;
//
//   private String address;
//
//   @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//   @JsonIgnore
//   @ToString.Exclude
//   private Set<UserPermission> userPermissions;
//
//   @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
//   @JsonIgnore
//   @ToString.Exclude
//   private Set<Machine> machines;
